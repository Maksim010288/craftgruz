package com.example.CraftGruz.service;

import lombok.Data;
import org.springframework.stereotype.Component;

@Data
@Component
public class Reviews {

    private String enterpriseName;
    private String message;
    private String locationFrom;
    private String locationTo;

    public Reviews(){}

    public Reviews(String enterpriseName, String message, String locationFrom, String locationTo){
        this.enterpriseName  = enterpriseName;
        this.message = message;
        this.locationFrom = locationFrom;
        this.locationTo = locationTo;
    }

}
