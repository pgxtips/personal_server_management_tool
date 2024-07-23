mod config;
mod models;
mod views;
mod controllers;
mod server;

//use crate::server::server;

#[actix_web::main] // or #[tokio::main]
async fn main() -> std::io::Result<()> {
    config::system_config::system_init();
    server::server::server_start().await
}
