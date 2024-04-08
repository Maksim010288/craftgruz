package com.example.CraftGruz.service;

import com.example.CraftGruz.email.EmailSender;
import com.example.CraftGruz.model.MessageSenderModel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Getter
@Service
@Data
public class CraftGruzService {

    private final List<Reviews> reviewsList = new ArrayList<>();

    @Autowired
    private EmailSender emailSender;

    public void submitNewReview(Reviews reviews){
        reviewsList.add(reviews);
    }

    public void sendMail(String emailTo, MessageSenderModel messageSenderModel){
        emailSender.send(emailTo, "Перевезення", messageSenderModel.toString());
    }


}
