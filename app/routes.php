<?php

Route::post('/projects', function () {
	try {
		$project = new Project(Input::all());
		$project->save();
		return Response::json(['success' => true]);
	}
	catch (Exception $e) {
		return Response::json(['success' => false, 'error' => 'Could not create project.']);
	}
});