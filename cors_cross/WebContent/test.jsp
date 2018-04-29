<%@page import="java.util.Date"%>
<%@page import="java.text.MessageFormat"%>
<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    String fname = MessageFormat.format( "test-{0,date,yyyyMMdd}.xsl", new Object [] { new Date() } );
    //response.setHeader("Content-Disposition","attachment; filename=" + fname );
    //response.setHeader("Access-Control-Allow-Origin", "*");
    //response.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
    //response.setHeader("Access-Control-Max-Age", "3600");
    //response.setHeader("Access-Control-Allow-Credentials", "true");
    //response.setHeader("Access-Control-Allow-Headers", "Authorization,DNT,User-Agent,Keep-Alive,Content-Type,accept,origin,X-Requested-With");
    response.setHeader("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaHVhaWNqIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTUyNDk1NzI3MywiZXhwIjoxNTI1MDQzNjczfQ.ig23wUShpOrylJG_WIEcsdPXViM5ZMbzVydBzTgFwN8");
%>    
{"aa":"bb"}
