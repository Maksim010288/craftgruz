package com.example.CraftGruz.controller;

import com.example.CraftGruz.model.MessageSenderModel;
import com.example.CraftGruz.service.CraftGruzService;
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
    private final CraftGruzService craftGruzService;

    public CraftGruzController(CraftGruzService craftGruzService) {
        this.craftGruzService = craftGruzService;
    }

    @GetMapping("/reviews")
    public String mainPages(Model model){
        model.addAttribute("list", craftGruzService.getReviewsList());
        return "TM_CRAFT_GRUZ/CRAFT GRUZ";
    }


    @GetMapping("/")
    public String index(){
        return "index/index";
    }

    @PostMapping("/reviews/add")
    public String reviewsForm(@RequestParam String enterprise,
                              @RequestParam String locationFrom,
                              @RequestParam String locationTo,
                              @RequestParam String reviews_text){
        Reviews reviews = new Reviews(enterprise, reviews_text, locationFrom, locationTo);
        craftGruzService.submitNewReview(reviews);
        System.out.println(craftGruzService.getReviewsList());
        return "redirect:/reviews";
    }

    @Async
    @PostMapping("/send/mail")
    protected Future<String> sendMail(@RequestParam String departure,
                                      @RequestParam String importance,
                                      @RequestParam Integer weight,
                                      @RequestParam String name,
                                      @RequestParam String phone){
        MessageSenderModel model = new MessageSenderModel(departure, importance, weight, name, phone);
        craftGruzService.sendMail("maksymbaziuk88@gmail.com", model);
        return AsyncResult.forValue("redirect:/reviews");
    }
}
