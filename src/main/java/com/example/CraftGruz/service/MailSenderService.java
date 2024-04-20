package com.example.CraftGruz.service;

import com.example.CraftGruz.email.EmailSender;
import com.example.CraftGruz.model.MessageSenderModel;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Locale;

@Service
public class MailSenderService {
    Logger logger =Logger.getLogger(MailSenderService.class);

    @Autowired
    private EmailSender emailSender;

    public void sendMail(String emailTo, MessageSenderModel messageSenderModel){
        emailSender.send(emailTo, "Перевезення", messageSenderModel.toString());
        logger.log(Level.INFO, " Повідомлення : " + messageSenderModel + " - відправлено");
    }
}
