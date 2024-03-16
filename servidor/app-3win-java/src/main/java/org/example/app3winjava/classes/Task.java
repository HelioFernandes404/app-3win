package org.example.app3winjava.classes;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table( name = "Task" )
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Esta linha indica que o ID será gerado automaticamente
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "done")
    private boolean done;
}
