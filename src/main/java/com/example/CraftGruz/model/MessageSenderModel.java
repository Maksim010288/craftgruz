package com.example.CraftGruz.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
@AllArgsConstructor
public class MessageSenderModel {
    private String pointOfDeparture;
    private String itemOfImportance;
    private Integer weight;
    private String firstName;
    private String numberPhone;

    public MessageSenderModel() {
    }

    ;

    @Override
    public String toString() {
        return "Клієнт:\n" +
                "Відправка: " + pointOfDeparture + "\n" +
                "Прибуття: " + itemOfImportance +  "\n" +
                "Вага: " + weight +  " кг. \n" +
                "Імя: " + firstName +  "\n" +
                "Телефон: " + numberPhone;
    }
}
