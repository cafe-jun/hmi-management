package com.hmr.demo.hmimgr.domain.entity;

import jakarta.persistence.*;
import lombok.ToString;

@ToString(callSuper = true)
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;

    private String role;


}
