package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Register_report;
import com.example.demo.entities.UserProblem;

@Transactional
@Repository
public interface ReportRepository extends JpaRepository<Register_report, Integer> {
	@Query("select rp from Register_report rp where id=:id")
	public List<Register_report> findAll(int id);
	
	@Modifying
	@Query("update Register_report set status=1 where id =:p")
	public int approveReport(int p);
	
	@Modifying
	@Query("update Register_report set status=2 where id =:p")
	public int declineReport(int p);
}
