package com.example.CraftGruz.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

@Entity
@Data
@Table(name = "order_cell")
public class OrderCellEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer id;
    @Column(name = "name")
    public String name;
    @Column(name = "number_phone")
    public String numberPhone;

    public OrderCellEntity(){}

    public OrderCellEntity(String name, String numberPhone) {
        this.name = name;
        this.numberPhone = numberPhone;
    }
}
