package com.example.CraftGruz.repository;

import com.example.CraftGruz.entity.OrderCellEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderCellRepository extends JpaRepository<OrderCellEntity, Long> {
}
