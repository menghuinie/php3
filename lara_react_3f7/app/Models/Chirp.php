<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Events\ChirpCreated;

class Chirp extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'message',
    ];

    /**
     * dispatchesEvents
     *
     * @var array
     */
    protected $dispatchesEvents = [
        'created' => ChirpCreated::class,
    ];

    /**
     * Each chip is associated with a user
     *
     * @return void
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}