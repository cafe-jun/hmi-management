package com.hmr.demo.hmimgr.repository;

import com.hmr.demo.hmimgr.model.Tokens;

import java.util.List;

public interface TokenRepositoryCustom {
    List<Tokens> findAllValidTokenByUserId(String username);
}
