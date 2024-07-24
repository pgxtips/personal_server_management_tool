use actix_web::{get, Responder};

use crate::server::routes::get_routes;

#[get("/system")]
pub async fn dashboard_system() -> impl Responder { get_routes::dashboard_system::page().await }

#[get("/docker")]
pub async fn dashboard_docker() -> impl Responder { get_routes::dashboard_docker::page().await }

#[get("/firewall")]
pub async fn dashboard_firewall() -> impl Responder { get_routes::dashboard_firewall::page().await }

#[get("/projects")]
pub async fn dashboard_projects() -> impl Responder { get_routes::dashboard_projects::page().await }
