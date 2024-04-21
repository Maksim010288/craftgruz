package com.example.CraftGruz.controller;

import com.example.CraftGruz.service.ClientsService;
import com.example.CraftGruz.model.MessageSenderModel;
import com.example.CraftGruz.service.CraftGruzService;
import com.example.CraftGruz.service.MailSenderService;
import com.example.CraftGruz.service.Reviews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.AsyncResult;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.concurrent.Future;

@Controller
public class CraftGruzController {

    @Autowired
    private MailSenderService mailSenderService;

    @Autowired
    private CraftGruzService craftGruzService;

    @Autowired
    private ClientsService clientsService;


    public CraftGruzController(MailSenderService mailSenderService) {
        this.mailSenderService = mailSenderService;
    }

    @GetMapping("/")
    public String mainPages(Model model) {
        model.addAttribute("listReviews", craftGruzService.getAllReviews());
        return "CRAFTLOAD/tmgruz";
    }

    @GetMapping("/message")
    public String messageReview() {
        return "CRAFTLOAD/message";
    }


    @PostMapping("/reviews/add")
    public String reviewsForm(@RequestParam String enterprise,
                              @RequestParam String locationFrom,
                              @RequestParam String locationTo,
                              @RequestParam String reviews_text) {
        Reviews reviews = new Reviews(enterprise, reviews_text, locationFrom, locationTo);
        craftGruzService.addReview(reviews);
        return "redirect:/";
    }

    @Async
    @PostMapping("send/mail")
    protected Future<String> sendMail(@RequestParam String departure,
                                      @RequestParam String importance,
                                      @RequestParam String weight,
                                      @RequestParam String name,
                                      @RequestParam String phone,
                                      @RequestParam String email) {
        MessageSenderModel model = new MessageSenderModel(departure, importance, weight, name, phone, email);
        mailSenderService.sendMail("maksymbaziuk88@gmail.com", model);
        clientsService.add(model);
        return AsyncResult.forValue("redirect:/");
    }
}
