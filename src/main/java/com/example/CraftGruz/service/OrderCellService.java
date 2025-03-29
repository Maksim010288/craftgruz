package com.example.CraftGruz.service;

import com.example.CraftGruz.entity.OrderCellEntity;
import com.example.CraftGruz.repository.OrderCellRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderCellService {

    @Autowired
    private OrderCellRepository orderCellRepository;

    public void saveOrder(OrderCellEntity orderCellEntity) {
        orderCellRepository.save(orderCellEntity);
    }
}
