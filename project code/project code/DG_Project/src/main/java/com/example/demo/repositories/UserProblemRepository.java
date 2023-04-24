package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.UserProblem;

@Transactional
@Repository
public interface UserProblemRepository extends JpaRepository<UserProblem, Integer>{
	@Query("select up from UserProblem up where useridfk=:id")
	public List<UserProblem> findAll(int id);
	
	@Query("delete from UserProblem u where u.useridfk=:id")
	public void deletePrnbById(int id);
	
	@Modifying
	@Query("update UserProblem set status=1 where pid =:p")
	public int approveProblem(int p);
	
	@Modifying
	@Query("update UserProblem set status=2 where pid =:p")
	public int declineProblem(int p);
	
	
}
