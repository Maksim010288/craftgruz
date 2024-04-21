package com.example.CraftGruz.service;

import com.example.CraftGruz.email.EmailSender;
import com.example.CraftGruz.entity.CraftGruzEntity;
import com.example.CraftGruz.model.MessageSenderModel;
import com.example.CraftGruz.repository.CraftLoadRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Getter
@Service
@Data
public class CraftGruzService {

    Logger LOGGER = Logger.getLogger(CraftGruzService.class);

    private final List<CraftGruzEntity> listCraftgruzEntity = new ArrayList<>();

    @Autowired
    private CraftLoadRepository craftLoadRepository;

    public void addReview(Reviews reviews) {
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
