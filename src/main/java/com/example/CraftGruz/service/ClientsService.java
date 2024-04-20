package com.example.CraftGruz.service;


import com.example.CraftGruz.entity.ClientsEntity;
import com.example.CraftGruz.model.MessageSenderModel;
import com.example.CraftGruz.repository.ClientRepository;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientsService {

    private Logger LOGGER = Logger.getLogger(ClientsService.class);

    @Autowired
    private ClientRepository clientsRepository;

    public void add(MessageSenderModel messageSenderModel) {
        ClientsEntity clientsEntity = new ClientsEntity(
                messageSenderModel.getFirstName().toLowerCase(),
                messageSenderModel.getNumberPhone().toLowerCase(),
                messageSenderModel.getEmail().toLowerCase(),
                messageSenderModel.getPointOfDeparture().toLowerCase(),
                messageSenderModel.getItemOfImportance().toLowerCase(),
                messageSenderModel.getWeight());
        clientsRepository.save(clientsEntity);
        LOGGER.log(Level.INFO, "ADD NEW CLIENT : " + clientsEntity);
    }

    public List<ClientsEntity> getAll() {
        List<ClientsEntity> clientsEntities = new ArrayList<>();
        clientsEntities.addAll(clientsRepository.findAll());
        return clientsEntities;
    }

    public List<ClientsEntity> findBy(String value) {
        List<ClientsEntity> list = new ArrayList<>();
        for (ClientsEntity entity : clientsRepository.findAll()) {
            if (entity.getName().equals(value.toLowerCase()) ||
                    entity.getDeparture().contains(value.toLowerCase()) ||
                    entity.getImportance().contains(value.toLowerCase()) ||
                    entity.getWeight().contains(value) ||
                    entity.getTime().contains(value) ||
                    entity.getDate().contains(value)) {
                list.add(entity);
            }
        }
        return list;
    }


}
