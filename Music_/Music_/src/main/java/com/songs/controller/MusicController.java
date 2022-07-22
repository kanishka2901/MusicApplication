package com.songs.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.annotation.security.RolesAllowed;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.songs.model.Music;
import com.songs.service.MusicService;
import com.songs.service.SequenceGeneratorService;

@RestController
public class MusicController {
	// injecting repository
	@Autowired
	private MusicService musicService;
	
	@Autowired
	private SequenceGeneratorService service;
	
	ObjectMapper objectMapper = new ObjectMapper();

//	@GetMapping("/userLogin")
//	public String userValidation() {
//		return "User, Successfully logged in!";
//	}
//
//	
//	@GetMapping("/adminLogin")
//	public String adminValidation() {
//		return "Admin user, Successfully logged in!";
//	}

	// It saves the music details.
	@RequestMapping(value = "/createMusic", method = RequestMethod.POST, consumes = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.MULTIPART_FORM_DATA_VALUE })
	@RolesAllowed("user")
	public Music createMusic(@RequestParam(required = true, value = "user") String jsondata,
			@RequestParam(required = true, value = "file") MultipartFile file)
			throws JsonMappingException, JsonProcessingException {
	
		String fileName = musicService.storeFile(file);
		String url = musicService.geturl(fileName);
		String contentType = musicService.getcontentType(file);
		String fileSize = musicService.getFileSize(file);
		
		Music music = objectMapper.readValue(jsondata, Music.class);
		
		music.setId(service.getSequenceNumber(music.SEQUENCE_NAME));
		music.setFileName(fileName);
		music.setContentType(contentType);
		music.setUrl(url);
//		music.setId(music.getId());
		music.setSongTitle(music.getSongTitle());
		music.setArtist(music.getArtist());
		music.setGenre(music.getGenre());
		music.setSize(fileSize);
		music.setUploader(music.getUploader());

		return musicService.createMusic(music);
	}

	// retrieving the data, It returns a list of all Music.
	@GetMapping("/findAllMusic")
	@RolesAllowed("admin")
	public List<Music> getAllMusic() {
		return musicService.getAllMusic();
	}

	// It returns music detail of specific id.
	@GetMapping("/findAllMusicById/{id}")
	public Optional<Music> getMusicById(@PathVariable int id) {
		return musicService.getMusicbyId(id);
	}

	// It returns music detail of specific uploader.
	@GetMapping("/findAllMusicByUploader/{uploader}")
	public List<Music> getMusicByUploader(@PathVariable String uploader) {
		return musicService.getMusicbyUploader(uploader);
	}

	// It returns a music detail that we have specified in the path variable.
	@GetMapping("/findAllMusicByArtist/{artist}")
	public List<Music> getMusicbyArtist(@PathVariable String artist) {
		return musicService.getMusicbyArtist(artist);
	}

	@GetMapping("/downloadMusic/{fileName}")
	public ResponseEntity<Resource>downloadFile(@PathVariable String fileName, HttpServletRequest request)
	{
		Resource resource = musicService.downloadFile(fileName);
		
		String mimeType;
		
		try {
			mimeType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
		} catch (IOException e) {
			mimeType = MediaType.APPLICATION_OCTET_STREAM_VALUE;
		}
		return ResponseEntity.ok()
				.contentType(MediaType.parseMediaType(mimeType))
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment;fileName="+resource.getFilename())
				.body(resource);
	}
	
	// It updates a record with id that we have specified in the path variable.
	@PutMapping("/updateMusic/{id}")
	public Music updateMusic(@PathVariable int id, @RequestParam(required = true, value = "user") String jsondata,@RequestParam(required = true, value = "file") MultipartFile file) throws JsonMappingException, JsonProcessingException {
		Music music = objectMapper.readValue(jsondata, Music.class);
		return musicService.updateMusic(id, music,file);
	}
	

	// It deletes a specific music that we have specified in the path variable.
	@DeleteMapping("/delete/{id}")
	public void deleteMusic(@PathVariable int id) {
		musicService.deleteMusicbyId(id);
	}

}
