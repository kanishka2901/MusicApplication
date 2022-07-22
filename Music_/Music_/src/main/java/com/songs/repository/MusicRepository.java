package com.songs.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.songs.model.Music;

@Repository
public interface MusicRepository extends MongoRepository<Music, Integer> {

    List<Music> findByArtist(String artist);
	List<Music> findByUploader(String uploader);
	
}