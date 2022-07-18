package com.songs.model;

//import java.time.LocalDate;
//import java.time.LocalDateTime;
//import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.ToString;

@Document(collection = "MusicAlbum")
@ToString
public class Music {

	@Id
//	auto-generate id if not given at runtime
	private int id;
	private String songTitle;
	private String artist;
	private String genre;
	private String uploader;
	private String fileName;
	private String contentType;
	private String url;
	private String size;

	public Music() {
		super();
	}

	public Music(int id, String songTitle, String artist, String genre, String uploader,String fileName, String contentType, String url, String size) {
		super();
		this.id = id;
		this.songTitle = songTitle;
		this.artist = artist;
		this.genre = genre;
		this.uploader = uploader;
		this.fileName = fileName;
		this.contentType = contentType;
		this.url = url;
		this.size = size;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSongTitle() {
		return songTitle;
	}

	public void setSongTitle(String songTitle) {
		this.songTitle = songTitle;
	}

	public String getArtist() {
		return artist;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getUploader() {
		return uploader;
	}

	public void setUploader(String uploader) {
		this.uploader = uploader;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
//	public LocalDateTime getUploadTime() {
//		LocalDateTime time = LocalDateTime.now();
//		return time;
//	}
//
//	public void setUploadTime(LocalDateTime uploadTime) {
//		this.uploadTime = uploadTime;
//	}
//
//	public LocalDateTime getUpdationTime() {
//		LocalDateTime time = LocalDateTime.now();
//		return time;
//	}
//
//	public void setUpdationTime(LocalDateTime updationTime) {
//		this.updationTime = updationTime;
//	}
}
