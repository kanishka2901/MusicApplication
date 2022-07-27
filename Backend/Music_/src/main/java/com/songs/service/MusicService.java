package com.songs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import com.songs.model.Music;

public interface MusicService {
	public Music createMusic(Music music);

	public List<Music> getAllMusic();

	public Optional<Music> getMusicbyId(int id);

	public List<Music> getMusicbyUploader(String uploader);

	public List<Music> getMusicbyArtist(String artist);

	public Music updateMusic(int id, Music music, MultipartFile file);

	public String getcontentType(MultipartFile file);

	public String geturl(String fileName);

	public String storeFile(MultipartFile file);

	public String getFileSize(MultipartFile file);

	public Resource downloadFile(String fileName);

	public void deleteMusicbyId(int id);

	public List<Music> getMusicbysongTitle(String songTitle);
}