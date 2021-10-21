package com.examal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("UserService")
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User login(String username, String pass) {
        return userRepository.findByUsernameAndPassword(username, pass);
    }

    @Transactional
    public boolean isLoginExists(String username, String pass) {
        boolean flag;
        flag = (userRepository.findByUsernameAndPassword(username, pass) != null);
        return flag;
    }

    @Transactional
    public User saveUser(User user) {
        userRepository.save(user);
        return user;
    }

    @Transactional
    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    @Transactional
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public User getOneUser(String username, String password) {
        return userRepository.findByUsernameAndPassword(username, password);
    }
}
