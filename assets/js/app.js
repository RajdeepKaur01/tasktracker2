// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html";
import $ from "jquery";
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

function update_buttons() {
  $('.startbutton').each( (_, bb) => {
    let id = $(bb).data('id');
    console.log("I am id",id);
    if (id != "") {
      $(bb).text("Stop");
    }
    else {
      $(bb).text("Start");
    }
  });
}

function set_button(task_id, id) {
  $('.startbutton').each( (_, bb) => {
    if (task_id == $(bb).data('task-id')) {
      $(bb).data('id', id);
    }
  });
  update_buttons();
}

function start(task_id,time) {
  let text = JSON.stringify({
    timeblocks: {
        task_id: task_id,
        start_time: time,
        end_time: time,
        start: true
      },
  });
console.log("TEXT", timeblocks_path);

  $.ajax(timeblocks_path, {
    method: "post",
    dataType: "json",
    contentType: "application/json; charset=UTF-8",
    data: text,
    success: (resp) => { console.log("resp", resp); set_button(task_id, resp.data.id); },
    error: (resp) => { console.log(resp); },
  });
}

function stop(task_id, id, time) {
  console.log("STOP TIME",time);
  let text = JSON.stringify({
    timeblocks: {
        end_time: time,
        start: false
      },
  });
console.log("path2",timeblocks_path);
  $.ajax(timeblocks_path + "/" + id, {
    method: "put",
    dataType: "json",
    contentType: "application/json; charset=UTF-8",
    data: text,
    success: (resp) => { console.log(resp); set_button(task_id,""); },
    error: (resp) => { console.log(resp); },
  });
}

function start_click(ev) {
  console.log("I am here");
  let btn = $(ev.target);
  let task_id = btn.data('task-id');
  let id = btn.data('id');
  let utc_time = new Date();

  // Convert Current time to EST time
  let time = new Date(utc_time.getTime()+(-300)*60*1000);

  console.log("TIME",time);


  if (id != "") {
    console.log("in stop",time);
    stop(task_id, id, time);
  }
  else {
    console.log("in start");
    start(task_id, time);
  }
}

function init_start() {
  console.log("start");
  if (!$('.startbutton')) {
    return;
  }
  console.log($('.startbutton'));
  $('.startbutton').click(start_click);

  update_buttons();
}

$(init_start);
