package com.hmr.demo.hmimgr.domain.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString(callSuper = true)
@Table(indexes = {
        @Index(columnList = "title"),
        @Index(columnList = "createdAt"),
        @Index(columnList = "createdBy")
})
public class HMIDevice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;




}
