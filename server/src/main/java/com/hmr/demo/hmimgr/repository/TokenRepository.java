package com.hmr.demo.hmimgr.repository;

import com.hmr.demo.hmimgr.model.Tokens;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TokenRepository extends JpaRepository<Tokens, Long>, TokenRepositoryCustom {
    Optional<Tokens> findByToken(String token);
}
