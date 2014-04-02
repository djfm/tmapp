<?php

class Project extends Eloquent
{
	protected $fillable = array('reference', 'deadline', 'time_of_day', 'priority', 'comments');
}