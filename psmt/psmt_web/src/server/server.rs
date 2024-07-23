use actix_web::{dev::Server, App, HttpServer};
use crate::controllers::get_controller;

pub fn server_handle() -> anyhow::Result<Server> {

    let srv = HttpServer::new(|| {
        App::new()
            .service(get_controller::landing_dashboard)
    })
    .bind(("127.0.0.1", 8080))?
    .run();

    return Ok(srv);
}

