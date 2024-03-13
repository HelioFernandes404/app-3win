package org.example.app3winjava.controllers;


import org.example.app3winjava.classes.Task;
import org.example.app3winjava.classes.dto.TaskDTO;
import org.example.app3winjava.services.TaskServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController()
    @RequestMapping("/api/v1/task")
@CrossOrigin(origins = "http://localhost:4200")
public class TaskController {

    @Autowired
    private TaskServices taskServices;


    @GetMapping()
    public ResponseEntity<List<Task>>getTask() {
        List<Task> taskList = taskServices.findAll();

        return ResponseEntity.ok(taskList);
    }

    @PostMapping(produces ="application/json", consumes="application/json")
    public ResponseEntity<TaskDTO> create (@RequestBody TaskDTO dto) {
        TaskDTO en = taskServices.save(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getID()).toUri();

        return ResponseEntity.created(uri).body(en);
    }

    @DeleteMapping(value = "/{id}" ,produces="application/json")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws Exception {
        taskServices.deteleById(id);
        return ResponseEntity.noContent().build();
    }
}
