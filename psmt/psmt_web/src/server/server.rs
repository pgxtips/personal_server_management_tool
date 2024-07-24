use actix_web::{dev::Server, web::{self, Redirect}, App, HttpServer };
use actix_files::Files;
use crate::controllers::get_controller;

pub fn server_handle() -> anyhow::Result<Server> {

    let srv = HttpServer::new(|| {
        App::new()
            .service(Files::new("/static/", "./psmt_web/src/views/templates/").show_files_listing())
            .service(Files::new("/static_res/", "./psmt_web/src/views/static_res/").show_files_listing())
            .service(get_controller::dashboard_system)
            .service(get_controller::dashboard_docker)
            .service(get_controller::dashboard_firewall)
            .service(get_controller::dashboard_projects)
            // redirect to dashboard_system
            .default_service(web::to(|| async { Redirect::to("/system") }))
    })
    .bind(("127.0.0.1", 8080))?
    .run();

    return Ok(srv);
}

