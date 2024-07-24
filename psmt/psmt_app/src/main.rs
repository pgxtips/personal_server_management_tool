extern crate psmt_web;

use crate::psmt_web::server::server as psmt_web_server;

#[tokio::main]
async fn main() -> anyhow::Result<()>{

    env_logger::init_from_env(env_logger::Env::default().default_filter_or("info"));

    let ui_server_handle = psmt_web_server::server_handle()?;
    let ui_server_thread = tokio::spawn(ui_server_handle);

    let _ =  tokio::try_join!(ui_server_thread)?;

    Ok(())
}
