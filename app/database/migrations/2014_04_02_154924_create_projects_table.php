<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('projects', function ($table) {
			$table->increments('id');
			$table->string('reference');
			$table->date('deadline');
			$table->string('time_of_day');
			$table->string('priority');
			$table->text('comments');
			$table->timestamps();
			$table->unique('reference');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('projects');
	}

}
