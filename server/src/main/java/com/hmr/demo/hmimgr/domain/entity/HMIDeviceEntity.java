package com.hmr.demo.hmimgr.domain.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.ToString;

@Entity
@Table(name = "users")
@Getter
@ToString(callSuper = true)
public class HMIDeviceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


}
