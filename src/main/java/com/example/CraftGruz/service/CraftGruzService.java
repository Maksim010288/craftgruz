package com.example.CraftGruz.service;

import com.example.CraftGruz.entity.CraftGruzEntity;
import com.example.CraftGruz.repository.CraftLoadRepository;
import lombok.Data;
import lombok.Getter;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Getter
@Service
@Data
public class CraftGruzService {
    String file = "D:\\idea\\IdeaProjects\\TMCRAFTGRUZPROJECT\\SearchPanel\\src\\main\\resources\\soung\\2.mp3";

    Logger LOGGER = Logger.getLogger(CraftGruzService.class);

    private final List<CraftGruzEntity> listCraftgruzEntity = new ArrayList<>();

    @Autowired
    private CraftLoadRepository craftLoadRepository;
    @Autowired
    private MusicPlayerService musicPlayerService;

    public void addReview(ReviewsService reviews) {
        CraftGruzEntity craftGruzEntity = new CraftGruzEntity(
                reviews.getEnterpriseName().toLowerCase(),
                reviews.getLocationFrom().toLowerCase(),
                reviews.getLocationTo().toLowerCase(),
                reviews.getMessage().toLowerCase());
        craftLoadRepository.save(craftGruzEntity);
        LOGGER.log(Level.INFO, craftGruzEntity.toString());
    }

    public List<CraftGruzEntity> getAllReviews() {
        return craftLoadRepository.findAll();
    }
}
