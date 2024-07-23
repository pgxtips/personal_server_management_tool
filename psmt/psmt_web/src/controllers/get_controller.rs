use actix_web::{get, Responder};

use crate::server::routes::get_routes;

#[get("/")]
pub async fn landing_dashboard() -> impl Responder { get_routes::landing_dashboard::page().await }
