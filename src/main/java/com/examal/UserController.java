package com.examal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/login/user/{username}/{password}")
    public User loginUser(@PathVariable("username") String username, @PathVariable("password") String password){
        return userService.login(username, password);
    }

    @PostMapping(value = "/save/user")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping(value = "/get/all/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "/get/one/user/{username}/{password}")
    public User getOneUser(@PathVariable("username") String username, @PathVariable("password") String password) {
        return userService.getOneUser(username, password);
    }

    @GetMapping(value = "/check/if/user/exist/{username}/{password}")
    public Boolean checkIfUserExists(@PathVariable("username") String username, @PathVariable("password") String password) {
        return userService.isLoginExists(username, password);
    }
}
