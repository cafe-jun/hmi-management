package com.hmr.demo.hmimgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hmr.demo.hmimgr.model.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByUsername(String username);
}
