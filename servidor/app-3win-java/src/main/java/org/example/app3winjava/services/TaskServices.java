package org.example.app3winjava.services;

import org.example.app3winjava.classes.Task;
import org.example.app3winjava.classes.dto.TaskDTO;
import org.example.app3winjava.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServices {

    @Autowired
    private TaskRepository repository;

    public TaskDTO save(TaskDTO dto) {

        Task task = new Task();
        task.setId(dto.getID());
        task.setName(dto.getName());
        task.setDone(false);

        repository.save(task);

        return new TaskDTO(task);
    }

    public List<Task> findAll() {
        List<Task> taskList = repository.findAll();
        return taskList;
    }
}
