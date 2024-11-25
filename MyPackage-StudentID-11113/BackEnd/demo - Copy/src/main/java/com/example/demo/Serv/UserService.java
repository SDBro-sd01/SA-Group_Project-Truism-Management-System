package com.example.demo.Serv;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.User;
import com.example.demo.Repo.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public String signup(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }
        userRepository.save(user);
        return "User registered successfully";
    }

    public User login(String email, String password) {
        return userRepository.findByEmail(email)
                .filter(user -> user.getPassword().equals(password))
                .orElse(null);
    }



    public String createUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return "Email already exists";
        }
        userRepository.save(user);
        return "User created successfully";
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public String deleteUser(Long id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return "User deleted successfully";
        }
        return "User not found";
    }

    public String updateUser(Long id, User user) {
        if (userRepository.existsById(id)) {
            User existingUser = userRepository.findById(id).get();
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword()); // No hashing as per your request
            userRepository.save(existingUser);
            return "User updated successfully";
        }
        return "User not found";
    }

}
