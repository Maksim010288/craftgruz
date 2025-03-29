package com.example.CraftGruz.controller;

import com.example.CraftGruz.entity.OrderCellEntity;
import com.example.CraftGruz.service.OrderCellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class OrderCellController {

    @Autowired
    private OrderCellService orderCellService;

    @PostMapping("/order/save")
    public String save(@RequestParam String name,
                     @RequestParam String numberPhone) {
        OrderCellEntity orderCell = new OrderCellEntity(name, numberPhone);
        orderCellService.saveOrder(orderCell);
        return "CRAFTLOAD/tmgruz";
    }
}
