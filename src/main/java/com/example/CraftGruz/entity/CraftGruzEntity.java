package com.example.CraftGruz.entity;

import com.example.CraftGruz.ClientsMessageData;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Data
@Table(name = "craft_gruz_review")
@AllArgsConstructor
@ToString
public class CraftGruzEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "enterprise")
    private String enterprise;
    @Column(name = "location_from")
    private String location_from;
    @Column(name = "location_to")
    private String getLocation_to;
    @Column(name = "reviews_text")
    private String reviews_text;
    @Column(name = "date")
    private String date;
    @Column(name="time")
    private String time;

    public CraftGruzEntity() {
        ClientsMessageData clientsMessageData;
    }

    public CraftGruzEntity(String enterprise, String location_from,
                           String location_to, String reviews_text){
        this.enterprise = enterprise;
        this.location_from = location_from;
        this.getLocation_to = location_to;
        this.reviews_text = reviews_text;
        this.date = ClientsMessageData.getDate();
        this.time = ClientsMessageData.getTime();
    }
}
