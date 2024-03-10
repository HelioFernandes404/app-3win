package org.example.app3winjava.repository;

import org.example.app3winjava.classes.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TaskRepository  extends JpaRepository<Task, Integer> {

}
