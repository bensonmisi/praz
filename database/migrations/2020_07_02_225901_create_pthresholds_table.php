<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePthresholdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pthresholds', function (Blueprint $table) {
            $table->id();
            $table->integer('pclass_id');
            $table->integer('pclassification_id');
            $table->string('locality');
            $table->integer('currency_id');
            $table->integer('lower');
            $table->integer('upper');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pthresholds');
    }
}
