package com.songs.service;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.songs.exceptions.ResourceNotFoundException;
import com.songs.model.Music;
import com.songs.repository.MusicRepository;

@Service
public class MusicServiceImpl implements MusicService {

	@Autowired
	private MusicRepository MusicRepo;
	private String fileStorageLocation;
	private Path fileStoragePath;

	public MusicServiceImpl(@Value("${file.storage.location:temp}") String fileStorageLocation) {

		this.fileStorageLocation = fileStorageLocation;
		fileStoragePath = Paths.get(fileStorageLocation).toAbsolutePath().normalize();

		try {
			Files.createDirectories(fileStoragePath);
		} catch (IOException e) {
			throw new RuntimeException("Issue in creating file directory");
		}
	}

	public String storeFile(MultipartFile file) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//		String simpleName = file.getName().substring(0,fileName.indexOf("."));
//		String extension = fileName.substring(fileName.lastIndexOf('.') + 1);
//		
//		if(fileName == "Pasoori - Shae Gill.mp3")
//		{
//			fileName = simpleName + "(" + i + ")" ;
//		}

		Path filePath = Paths.get(fileStoragePath + "\\" + fileName);

		try {
			Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException e) {
			throw new RuntimeException("Issue in storing the file", e);
		}
		return fileName;
	}

	public String getFileSize(MultipartFile file) {
		double sizeFile = file.getSize() / Math.pow(1024, 2);
		String res = Math.round(sizeFile * 100) / 100.0 + " MB";
		return res;
	}

	public String geturl(String fileName) {
		return ServletUriComponentsBuilder.fromCurrentContextPath().path("/download/").path(fileName).toUriString();
	}

	public String getcontentType(@RequestParam(required = true, value = "file") MultipartFile file) {
//		return file.;
		return file.getContentType();
	}

	@Override
	public Music createMusic(Music music) {

		return MusicRepo.save(music);
	}

	@Override
	public List<Music> getAllMusic() {
		return MusicRepo.findAll();
	}

	@Override
	public Optional<Music> getMusicbyId(int id) {
		return MusicRepo.findById(id);
	}

	@Override
	public List<Music> getMusicbyUploader(String uploader) {
		return MusicRepo.findByUploader(uploader);
	}

	@Override
	public List<Music> getMusicbyArtist(String artist) throws java.util.NoSuchElementException {
		List<Music> musics = MusicRepo.findByArtist(artist);
		if(!musics.isEmpty())
		return musics;
		else 
			throw new ResourceNotFoundException("user not found with given artist");
}

	@Override
	public List<Music> getMusicbysongTitle(String songTitle) throws java.util.NoSuchElementException {
		List<Music> musics = MusicRepo.findBySongTitle(songTitle);
		if(!musics.isEmpty())
		return musics;
		else 
			throw new ResourceNotFoundException("user not found with given title");
}

	@Override
	public Resource downloadFile(String fileName) {
		Path path = Paths.get(fileStorageLocation).toAbsolutePath().resolve(fileName);
		Resource resource;
		try {
			resource = new UrlResource(path.toUri());
//			return resource;
		} catch (MalformedURLException e) {
			throw new RuntimeException("Issue in downloading the file", e);
		}

		// validating resource
		if (resource.exists() && resource.isReadable()) {
			return resource;
		} else {
			throw new RuntimeException("File either doesn't exists or is not re  adable");
		}
	}

	@Override
	public Music updateMusic(int id, Music music, MultipartFile file) {
		Optional<Music> findById = MusicRepo.findById(id);
		if (findById.isPresent()) {
			Music musicEntity = findById.get();
			musicEntity.setSongTitle(music.getSongTitle());
			musicEntity.setArtist(music.getArtist());
			musicEntity.setGenre(music.getGenre());
//			musicEntity.setUploader(music.getUploader());
			musicEntity.setFileName(storeFile(file));
			musicEntity.setContentType(geturl(storeFile(file)));
			musicEntity.setUrl(getcontentType(file));
			musicEntity.setSize(getFileSize(file));
			return MusicRepo.save(musicEntity);
		}
		return null;
	}

	@Override
	public void deleteMusicbyId(int id) {
		MusicRepo.deleteById(id);
	}

}
