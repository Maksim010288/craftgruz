package com.example.CraftGruz.service;

import javazoom.jl.player.Player;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;

@Service
@Data
public class MusicPlayerService {

    private static Player player;

    public static Player musicPlayer(String file) {
        try {
            FileInputStream fileInputStream = new FileInputStream(file);
            player = new Player(fileInputStream);
            player.play();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return player;
    }
}
