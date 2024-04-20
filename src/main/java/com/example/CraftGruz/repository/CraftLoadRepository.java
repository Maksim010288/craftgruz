package com.example.CraftGruz.repository;

import com.example.CraftGruz.entity.CraftGruzEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CraftLoadRepository extends JpaRepository<CraftGruzEntity, Long> {
}
