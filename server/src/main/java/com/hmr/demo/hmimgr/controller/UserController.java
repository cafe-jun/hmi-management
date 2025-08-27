package com.hmr.demo.hmimgr.controller;


import com.hmr.demo.hmimgr.dto.users.UserCreateRequest;
import com.hmr.demo.hmimgr.dto.users.UserDto;
import com.hmr.demo.hmimgr.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/api/users")
@RestController
@RequiredArgsConstructor
public class UserController {


    private final UserService userService;

    @GetMapping
    public List<UserDto> findUsers() {
        return this.userService.findAllUsers();
    }


    @PostMapping
    public UserDto createUser(@RequestBody UserCreateRequest dto) {
        return userService.createUser(dto);
    }
    @PutMapping("/{id}")
    public UserDto updateUser(@PathVariable Long id, @RequestBody UserCreateRequest request) {
        return userService.updateUser(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable Long id) {
        return userService.findUser(id);
    }

    @GetMapping
    public List<UserDto> getAllUsers() {
        return userService.findAllUsers();
    }

}
