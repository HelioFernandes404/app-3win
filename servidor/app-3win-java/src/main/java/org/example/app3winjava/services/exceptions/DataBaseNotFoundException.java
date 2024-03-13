package org.example.app3winjava.services.exceptions;

public class DataBaseNotFoundException extends RuntimeException {

    public DataBaseNotFoundException(String msg) {
        super(msg);
    }

}
