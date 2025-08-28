package com.hmr.demo.hmimgr.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Setter @Getter
@ToString(callSuper = true)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true, length = 100)
    private String role;

    public User(){}
    @Builder
    public User(Long id,String username,String password,String role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
