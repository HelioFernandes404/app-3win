package org.example.app3winjava;

import org.example.app3winjava.classes.Task;
import org.example.app3winjava.repository.TaskRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class App3winJavaApplication {

    public static void main(String[] args) {
        SpringApplication.run(App3winJavaApplication.class, args);
    }

    @Bean
    public CommandLineRunner run(TaskRepository taskRepository) {
        return args -> {
            for (int i = 0; i < 10; i++) {
                Task task = new Task();
                task.setName("Task " + (i + 1));
                task.setDone(false);
                taskRepository.save(task);
            }
        };
    }
}
