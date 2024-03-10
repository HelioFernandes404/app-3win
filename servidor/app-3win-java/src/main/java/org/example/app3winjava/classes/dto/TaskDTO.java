package org.example.app3winjava.classes.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.app3winjava.classes.Task;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TaskDTO {

    private Integer ID;

    private String name;

    private boolean done;

    public TaskDTO(Task task) {
        setID(task.getId());
        setName(task.getName());
        setDone(task.isDone());
    }
}
